import Semver from 'semver';

import joiInfo from '../../generated/modules/joi/info.json' with { type: 'json' };
import { formatVersion } from '../utils.js';

export const getRedirectPath = (toPath: string) => {
  const [urlPath, hash] = toPath.split('#');
  const path = urlPath.replace(/\/$/, '').replace(/\.html$/, '') || '/';
  const match = path.match(/^\/(api|tester)(?:\/([^/]+))?$/);
  if (!match) {
    return null;
  }

  const [_, type, version] = match;
  const suffix = hash ? `#${hash}` : '';

  const [latestVersion] = joiInfo.versionsArray;
  const latestMasked = formatVersion(latestVersion);

  if (!version) {
    return `/${type}/${latestMasked}${suffix}`;
  }

  const maskedVersions = joiInfo.versionsArray.map(formatVersion);

  if (maskedVersions.includes(version)) {
    return null;
  }

  let targetVersion = latestVersion;
  try {
    const coerced = Semver.coerce(version);
    if (coerced) {
      const major = Semver.major(coerced);
      const sameMajor = joiInfo.versionsArray.find((v) => Semver.major(v) === major);
      if (sameMajor) {
        targetVersion = sameMajor;
      }
    }
  } catch {
    // Keep targetVersion as latest if coercion fails
  }

  const finalTarget = formatVersion(targetVersion);

  if (finalTarget === version) {
    return null;
  }

  return `/${type}/${finalTarget}${suffix}`;
};

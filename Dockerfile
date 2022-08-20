FROM 16.17.0-alpine3.15 as dev

# Taken from: https://github.com/Docker-Hub-frolvlad/docker-alpine-python2/blob/master/Dockerfile
# This hack is widely applied to avoid python printing issues in docker containers.
# See: https://github.com/Docker-Hub-frolvlad/docker-alpine-python3/pull/13
ENV PYTHONUNBUFFERED=1

RUN apk add --no-cache python2 && \
    python -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip install --upgrade pip setuptools && \
    rm -r /root/.cache

RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "dev"]

FROM mcr.microsoft.com/devcontainers/typescript-node:latest

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    unzip \
    curl \
    wget \
    git \
    gh \
    && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/*

USER node
RUN curl -fsSL https://bun.sh/install | bash

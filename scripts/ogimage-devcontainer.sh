#!/bin/bash

set -e

test -d .devcontainer/ogimage || mkdir -p .devcontainer/ogimage
cd .devcontainer/ogimage
curl -sL https://github.com/hankei6km/test-marp-ogimage/tarball/master | tar --wildcards --strip-components=1 -zxf - "**/.devcontainer/*" "**/themes/*"
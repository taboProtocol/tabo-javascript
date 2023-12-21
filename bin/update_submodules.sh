#!/usr/bin/env bash

# initialize submodules recursively
git submodule update --init --recursive

# update tabo-cpp
cd ./external/tabo-cpp
git checkout master
git pull --ff-only origin master

# update monero-project
cd ./external/tabo
git checkout master
git pull --ff-only origin master
cd ../../../../
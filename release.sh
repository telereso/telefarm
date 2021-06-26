#!/bin/bash

expo build:web

cp docs/CNAME web-build/
rm -rf docs/*

cp -rf web-build/ docs/
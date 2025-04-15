#!/bin/bash

mkdir src
mkdir tests
mkdir docs
mkdir config

# Create source code subdirectories
cd src

mkdir models
mkdir controllers
mkdir services
mkdir repositories

# Create test subdirectories
cd ../tests

mkdir unit
mkdir integration

# Go back to the project root
cd ..

echo "Project directory structure created successfully!"

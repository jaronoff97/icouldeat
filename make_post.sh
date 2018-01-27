#!/bin/bash

DIR="src/pages/$1"
now="$(date +'%Y-%m-%dT%T')"

echo "-----------------------"
echo "Making new post called:"
echo "$DIR"
echo "-----------------------"
mkdir $DIR
touch $DIR/index.md
echo "---">>$DIR/index.md
echo "title: REPLACE">>$DIR/index.md
echo "rating: REPLACE">>$DIR/index.md
echo "cuisine: REPLACE">>$DIR/index.md
echo "date: "$now>>$DIR/index.md
echo "---">>$DIR/index.md
echo "POST CREATED"
open $DIR
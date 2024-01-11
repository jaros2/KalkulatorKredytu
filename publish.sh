#!/bin/bash

rsync -avz -e ./dist/ pi@192.168.1.32:/var/www/kalkulator

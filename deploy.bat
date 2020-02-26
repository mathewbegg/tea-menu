@echo off
TITLE Build and Deploy

ECHO =================================
ECHO Intalling Dependencies
ECHO =================================
call npm install

ECHO =================================
ECHO Building Project
ECHO =================================
call ng build --prod

ECHO =================================
ECHO Syncing to s3
ECHO =================================
call aws s3 sync ./dist/tea-menu s3://tea.mathewbegg.com --delete
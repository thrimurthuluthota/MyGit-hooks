require('shelljs/global');

var outputStr = exec('git diff --cached --name-only', {silent:true}).output.trim();
var modifiedFiles = outputStr.split(/\n/);

var importantFile = ['package.json','bower.json'];

var found = importantFile.some(function(s) {
  return modifiedFiles.indexOf(s) != -1;
});

if(found) {
  echo("  Error: Please do not commit these files")
  echo("  1) package.json");
  echo("  2) bower.json");
  echo("  ");
  echo("  Use the following command to fix this");
  echo("  git reset HEAD package.json bower.json");
  process.exit(1);
}


#!/bin/sh

echo "pre-commit..."
var outputStr = exec('git diff --cached --name-only', {silent:true}).output.trim();
var modifiedFiles = outputStr.split(/\n/);

var importantFile = ['package.json','bower.json'];

var found = importantFile.some(function(s) {
  return modifiedFiles.indexOf(s) != -1;
});

if(found) {
  echo("  Error: Please do not commit these files")
  echo("  1) package.json");
  echo("  2) bower.json");
  echo("  ");
  echo("  Use the following command to fix this");
  echo("  git reset HEAD package.json bower.json");
  process.exit(1);
}



# check if any .js file CHANGED
echo "pre-commit..."
git diff --cached --name --only --diff-filter=ACM | grep '.js$'>/dev/null 2>&1
 
 if [[$? == 0]]; then
 gulp lint
 

fi
exit $?
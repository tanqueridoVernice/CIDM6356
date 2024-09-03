In VS Code, press Ctrl+Shift+V to preview this README.md file or Cmd+Shift+V on a Mac.

# 6356-fraud-detection-website
The instructions for this assignment can be found at   
(https://docs.google.com/document/d/1nIwYAq0FY8XjjqdrDjtaInXhLJ30itRTx2ap_Ut_KaA/edit?usp=sharing)  

# Purpose: 
To create a web page that can detect financial fraud using various key ratios following the research by Kanapickiene and Grundiene (2015).

## How to Preview HTML
VS Code does not have a built-in preview for HTML. However, the VS Code extension 'Live Server' by Ritwick Dey is popular and opens the web page in your local browser. Saving your .html file causes the browser to automatically update the preview. Preview the web page by right clicking the .html file or inside the .html file, then select 'Open with Live Server.' If you have two monitors, consider coding on one monitor and preview on the second monitor. 

Some other useful extensions are HTML Boilerplate by sidthesloth and HTML CSS Support by ecmel. See Youtube for good tutorials on these extensions.

## Useful GIT Commands:  
Use the terminal or command line to issue git commands. 
  
**Typically, only configure your settings one time per computer**, unless you want to edit your name or email address in the future or change computers. Git saves this info on your computer. *Substitute your name and email address*. This info will be used to log who made what changes to code.
```
 git config --global user.name "Sean Humpherys" 
 git config --global user.email shumpherys@wtamu.edu
```

**To clone an assignment the first time, follow these commands.** Do this command for each assignment. Or, if you use multiple computers (work, home, school) do this once per computer per assignment. The URL to your assignment respository is found under the [Code] button and "Clone with HTTPS" on github.com. 
```bash
 git clone https://github.com/username/something  #use the URL to your specific assignment repository on github.com
 ```

**At the start of your coding session each day**, you should issue the following command to verify you have the latest changes to the online-repository or to pull down any changes/comments made by the professor:     
```bash
 git pull  
 git status 
```
You should see "Your branch is up to date with the 'origin/master', and "nothing to commit"    
 
**At the end of each day (or after your class) you should run these commands** to upload your changes to your online repository. The professor can see your changes:     
```bash
 git add -A
 git status    
 git commit -m "Type a message here in quotes that briefly describing your changes"
 git status    
 git push
 git status   
```
The first status should report that files have changed or been added and needs to be committed. The second status should say "nothing to commit." The third status should report "Your branch is up to date with the 'origin/master', and "nothing to commit"  

**When you are done with the assignemnt and ready for the professor to grade**, issue the following command with the commit message **"Ready for grading"**. The professor will see your comment and grade the assignment. 
```bash
 git add -A  
 git commit -m "Ready for grading" 
 git push
 git status   
```
After you are familiar with git workflow, you can skip the 'git status' commands, but they are useful for beginnners to see what is happening at each command. 



//* git -> vcs (version control system)
//* github -> gitlab , bitbucket

// setup -> v1

// home page -> v2

// register page -> v3

//login -> v4

//? to check if git is downloaded
//* git -v


//! config
//* git config --global --list    -> list global config
//* git config --global user.name 'sarbaraj'
//* git config --global user.email '<rajclasher321@gmail.com>'

//* git config --global init.defaultbranch main
//* git config --global pull.rebase false    //git has merge or rebase


        // //* git config --global --list 
        // user.email=rajclasher321@gmail.com
        // user.name=sarbaraj
        // init.defaultbranch=main
        // pull.rebase=false

//? repository / repo
// folder + .git
// project + history


//? local repo
//? remote repo

//?initialize empty git repository
//* git init  (get1 side shows (main) after doing "git init")
               //example //ACER@FIRESTORM MINGW64 ~/Desktop/mern stack 1/git1 (main)

//* git status 
                        //? output
                        // On branch main

                        // No commits yet

                        // Untracked files:
                        //   (use "git add <file>..." to include in what will be committed)
                        //         1.variable.js
                        //         10.hoisting.js
                        //         11.closure.js
                        //         12.class.js
                        //         2.datatypes.js
                        //         3.operators.js
                        //         4.control-statements.js
                        //         5.object.js
                        //         6.array.js
                        //         7.function.js
                        //         8.array-methods.js
                        //         9.scope.js
                        //         modules/

                        // nothing added to commit but untracked files present (use "git add" to track)

//? workflow
// working directory -> ready-state  -> local repo version ->remote repo
// working directory -> staging area -> local repo
// changes -> staged changed -> version
//?             git add         git commit                      git push origin <branch_name>
                        //? Git Workflow
                        // Working Directory
                        //        │
                        //    git add
                        //        ▼
                        // Staging Area
                        //        │
                        //  git commit
                        //        ▼
                        // Local Repository
                        //        │
                        // git push origin main
                        //        ▼
                        // Remote Repository (GitHub)


//* git add <file_path>
//* git commit -m "<commit_message>"

//* make remote repo 
// -> open github -> go to home -> go to new -> write repo name then click on create

//* to connect local and remote repo
//git remote add origin https://github.com/sarbaraj/js_basics.git

//* git push origin <branch_name>
//git push origin main

// u -> untracked (Git is not tracking the file yet.) , m -> mofified (The file has been staged with git add.) , a -> added(The file has been changed.)
//! branch
//* git branch -> list all local branch
                //? output
                // * main
                        //i.e we currently have one branch called "main" and *sign shows which branch i am at currently

//* git branch <branch_name>   -> create new branch
//* git switch <branch_name>      // => git checkout <branch_name>
//* git switch -c <branch_name>     // => git checkout -b <branch_name>        -> create & switch to new branch

//! merge
//* git merge <branch_name>

//* git log
//* git log --online
//* git log --online origin/main..m ain
//* git log --online test..main

//! diff
//* git diff origin/main..main      //to show the changes introduced by commits
                // Remote (origin/main)
                // A --- B --- C
                // Local (main)
                // A --- B --- C --- D --- E
                // will show the changes introduced by commits D and E.

//* git diff test..main   //to see file changes


//pull push branch merge 

//! remote
//* git remote add origin <remote_url>
//* git remote -v  //shows current origin
                        // output
                        // origin  https://github.com/sarbaraj/js_basics1.git (fetch)   //fetch chai remote ko lagi point garne ho
                        // origin  https://github.com/sarbaraj/js_basics1.git (push)
//* git remote remove origin


//! merge conflict



//* pull request

//? main -> production
//? develop -> integration
//? feature ->
//? fix -> bug fic
//? hotfix -> critical bug fic

//todo: revert , reset , cherry-pick , rebase
//? stash









//! github
/*
git clone "paste link"

git branch sarbaraj
git branch

git switch sarbaraj
git branch

code .

git add . //to add everything at once
git commit -m "module1 solution"
git push origin sarbaraj
*/



//:qa 
//git branch -vv
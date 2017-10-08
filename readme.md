
## How to get started

1. Open Hyper
2. Go to the directory of your website by entering `goto_marit`
3. Pull down any remote changes to your website by entering `git pull origin master`
4. Make sure everything looks good by entering `git status`
5. If so, start Jekyll by entering `run_jekyll`
6. Open Chrome and go to `localhost:4000`
7. Back in Hyper, enter `code .` to open up your website in VS Code editor program

## Committing changes and pushing them to GitHub

1. In Hyper, enter `git status` to see what changes you've made; all the files that are new, have changed, or been deleted will appear in red.
2. If everything looks good, enter `git add .` to stage all of those changes for commit
3. Hell, why not enter `git status` again to make sure all of those red files have turned green.
4. Now, it's time to make the commit. Enter `git commit -m "Add brief description of what changes were made for this commit"`
5. One final `git status` will let you know everything looks fine.
6. If everything does, enter `git push origin master` to push all the changes to GitHub. Enter your username and password. These changes will be live on your site immediately.

## Front matter

A few other front matter variables that could be used.

- If you don't want the title to appear in a post or project, include the variable `hide_title: true`. Pretty self explanatory, that. 

## Images

Content images, like those used in posts and projects, should be saved in folders created just for that piece of content. For instance, if you create a project called `still_life_with_yorkie.md`, you would create a folder called `still_life_with_yorkie` in the `images/content/projects` folder. 

You would place images for that project in this folder. In the front matter of the project, the URL you provide in the image path should be relative to the images folder, including the leading `/`, for example:

```javascript
title: "Still life with yorkie"
weight: 9
featured_image:
  description: A handsome yorkie sits in the sunlight surrounded by decorative fruit
  alt: Still life with yorkie
  large: /projects/still_life_with_yorkie/yorkie_large.jpg
  thumbnail: /projects/still_life_with_yorkie/yorkie_thumb.jpg
```

When resizing images, go by these general standards:

| Image     | Width     | Size      | Usage                                 |
| --------- | --------- | --------- | ------------------------------------- |
| Large     | 1200px    | 150-260k  | At the top of the single view         |
| Thumbnail | 600px     | 50-80k    | Part of the grid on the list view     |


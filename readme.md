
## How to get started

1. Open iTerm
2. Go to the directory of your website `cd ~/Sites/kmaritripley.github.io`
3. Make sure there are no updates on GitHub that you need to pull down locally `git pull origin master`
4. Just to make sure everything is good enter `git status`
5. Open up your website in Sublime Text by running `subl .` 
6. Back in iTerm, start Jekyll `run_jekyll`
7. Open Chrome and go to `localhost:4000`

## Committing changes and pushing them to GitHub

1. In iTerm, enter `git status` to see what changes you've made; all the files that are new, have changed, or been deleted will appear in red.
2. If everything looks good, enter `git add .` to stage all of those changes for commit
3. Hell, why not enter `git status` again to make sure all of those red files have turned green.
4. Now, it's time to make the commit. Enter `git commit -m "Add brief description of what changes were made for this commit"`
5. One final `git status` will let you know everything looks fine.
6. If everything does, enter `git push origin master` to push all the changes to GitHub. These changes will be live on your site immediately.

## Front matter

A few other front matter variables that could be used.

- If you don't want the title to appear in a post or project, include the variable `hide_title: true`. Pretty self explanatory, that. 

## Images

Content images, like those used in posts and projects, should be saved in folders created just for that piece of content. For instance, if you create a project called `still_life_with_yorkie.md`, you would create a folder called `still_life_with_yorkie` in the `images/content/projects` folder. 

You would place images for that project in this folder. In the front matter of the project, the URL you provide in the image path should be relative to the images folder, including the leading `/`, for example:

	---
	title: "Still life with yorkie"
	weight: 9
	featured_image:
	  description: A handsome yorkie sits in the sunlight surrounded by decorative fruit
	  alt: Still life with yorkie
	  large: /projects/still_life_with_yorkie/yorkie_large.jpg
	  thumbnail: /projects/still_life_with_yorkie/yorkie_thumb.jpg
	---

When resizing images, go by these general standards:

<table>
	<tr>
		<th>Image</th>
		<th>Width</th>
		<th>Size</th>
		<th>Usage</th>
	</tr>
	<tr>
		<td>Large</td>
		<td>1200px</td>
		<td>150-260k</td>
		<td>At the top of the single view</td>
	</tr>
	<tr>
		<td>Thumbnail</td>
		<td>600px</td>
		<td>50-80k</td>
		<td>Part of the grid on the list view</td>
	</tr>
</table>
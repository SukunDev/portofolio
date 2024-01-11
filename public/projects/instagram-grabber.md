---
title: "Instagram Grabber"
description: "Library, PyPi, Python"
thumbnail: /img/instagramgrabber.png
published_at: "2022-01-10"
updated_at: "2022-01-10"
---

# InstagramGrabber

InstagramGrabber is a Python module that allows developers to access and retrieve data from Instagram. With functionalities like downloading images, videos, and user profile information, this module provides an effective solution for integrating Instagram into projects without the need to access the official API. Facilitating data extraction, InstagramGrabber is suitable for various software development applications and scenarios.

---

## Features

- **Instagram Post Grabber**: retrieves all information about a post
- **Instagram User Grabber**: retrieves all information about a user
- **Instagram User Posts Grabber**: retrieves all information about a user's posts
- **Instagram User Reels Grabber**: retrieves all information about a user's reels
- **Instagram User Stories Grabber**: retrieves all information about a user's stories

## Installation

### Using Git

```bash
git clone https://github.com/SukunDev/instagramgrabber.git
cd instagramgrabber
python -m setup.py install
```

### Using PIP

```bash
pip install InstagramGrabber
```

## Usage

### Login

Login before using this module. Retrieve cookies for further activities.

```python
from InstagramGrabber import Instagram
from dotenv import load_dotenv
import os


load_dotenv()

username = os.environ.get("IG_USERNAME", None) # replace with your Instagram username
password = os.environ.get("IG_PASSWORD", None) # replace with your Instagram password

ig = Instagram(username=username, password=password)
account = ig.login()
print(account['username']) # this will retrieve your Instagram username if login is successful
```

### Get Post

Retrieve the Instagram post link you want. You can use either a **Post** or a **Reel** URL.

```python
from InstagramGrabber import Instagram
from dotenv import load_dotenv
import os


load_dotenv()

username = os.environ.get("IG_USERNAME", None) # replace with your Instagram username
password = os.environ.get("IG_PASSWORD", None) # replace with your Instagram password

ig = Instagram(username=username, password=password)

if not os.path.exists(f"./instagram_cookies/{username}_cookies"):
    print("cookies not found")
    try:
        print("attempting login")
        user = ig.login()
        print(f"login successful [{user['username']}]")
    except Exception as e:
        print(str(e))
    print("\n=============\n")

post = ig.get_post(url="https://www.instagram.com/p/C0oC-bchkjw")
print(f"user id: {post.user.user_id}") # retrieve user user id
print(f"username: {post.user.username}") # retrieve user username
print(f"full name: {post.user.full_name}") # retrieve user full name
print(f"category name: {post.user.category_name}") # retrieve user category name
print(f"biography: {post.user.biography}") # retrieve user biography
print(f"following count: {post.user.following}") # retrieve user following count
print(f"followers count: {post.user.followers}") # retrieve user followers count
print(f"posts count: {post.user.posts_count}") # retrieve user posts count
print(f"profile picture: {post.user.profile_picture}") # retrieve user profile picture

if post.media: # check if media exists
    print(post.media.prettify(indent=2)) # retrieve post info
```

### Get User

Retrieve the target Instagram username and run this program.

```python
from InstagramGrabber import Instagram
from dotenv import load_dotenv
import os


load_dotenv()

username = os.environ.get("IG_USERNAME", None) # replace with your Instagram username
password = os.environ.get("IG_PASSWORD", None) # replace with your Instagram password

ig = Instagram(username=username, password=password)

if not os.path.exists(f"./instagram_cookies/{username}_cookies"):
    print("cookies not found")
    try:
        print("attempting login")
        user = ig.login()
        print(f"login successful [{user['username']}]")
    except Exception as e:
        print(str(e))
    print("\n=============\n")



user = ig.get_user("hololive.animation")
print(f"user id: {user.user_id}") # retrieve user user id
print(f"username: {user.username}") # retrieve user username
print(f"full name: {user.full_name}") # retrieve user full name
print(f"category name: {user.category_name}") # retrieve user category name
print(f"biography: {user.biography}") # retrieve user biography
print(f"following count: {user.following}") # retrieve user following count
print(f"followers count: {user.followers}") # retrieve user followers count
print(f"posts count: {user.posts_count}") # retrieve user posts count
print(f"profile picture: {user.profile_picture}") # retrieve user profile picture
```

### Get All User Posts

Get the target Instagram username and run this program

```python
from InstagramGrabber import Instagram
from dotenv import load_dotenv
import os


load_dotenv()

username = os.environ.get("IG_USERNAME", None) # replace with your Instagram username
password = os.environ.get("IG_PASSWORD", None) # replace with your Instagram password

ig = Instagram(username=username, password=password)

if not os.path.exists(f"./instagram_cookies/{username}_cookies"):
    print("cookies not found")
    try:
        print("attempting login")
        user = ig.login()
        print(f"login successful [{user['username']}]")
    except Exception as e:
        print(str(e))
    print("\n=============\n")

user = ig.get_user("hololive.animation")
print(f"user id: {user.user_id}") # get user id
print(f"username: {user.username}") # get username
print(f"full name: {user.full_name}") # get full name
print(f"category name: {user.category_name}") # get category name
print(f"biography: {user.biography}") # get biography
print(f"following count: {user.following}") # get following count
print(f"followers count: {user.followers}") # get followers count
print(f"posts count: {user.posts_count}") # get posts count
print(f"profile picture: {user.profile_picture}") # get profile picture

max_id = None
more_available = True
while more_available:
    posts = user.get_post(max_id=max_id)
    max_id = posts.max_id
    more_available = posts.more_available
    print(f"Next max_id: {max_id}")
    print(f"More Available: {more_available}")
    if posts.media: # check if media exists
        print(posts.media.prettify(indent=2))

```

### Get All User Reels

Get the target Instagram username and run this program

```python
from InstagramGrabber import Instagram
from dotenv import load_dotenv
import os


load_dotenv()

username = os.environ.get("IG_USERNAME", None) # replace with your Instagram username
password = os.environ.get("IG_PASSWORD", None) # replace with your Instagram password

ig = Instagram(username=username, password=password)

if not os.path.exists(f"./instagram_cookies/{username}_cookies"):
    print("cookies not found")
    try:
        print("attempting login")
        user = ig.login()
        print(f"login successful [{user['username']}]")
    except Exception as e:
        print(str(e))
    print("\n=============\n")

user = ig.get_user("hololive.animation")
print(f"user id: {user.user_id}") # get user id
print(f"username: {user.username}") # get username
print(f"full name: {user.full_name}") # get full name
print(f"category name: {user.category_name}") # get category name
print(f"biography: {user.biography}") # get biography
print(f"following count: {user.following}") # get following count
print(f"followers count: {user.followers}") # get followers count
print(f"posts count: {user.posts_count}") # get posts count
print(f"profile picture: {user.profile_picture}") # get profile picture

max_id = None
more_available = True
while more_available:
    reels = user.get_reel(max_id=max_id)
    max_id = reels.max_id
    more_available = reels.more_available
    print(f"Next max_id: {max_id}")
    print(f"More Available: {more_available}")
    if reels.media: # check if media exists
        print(reels.media.prettify(indent=2))
```

### Get All User Stories

Get the target Instagram username and run this program

```python
from InstagramGrabber import Instagram
from dotenv import load_dotenv
import os


load_dotenv()

username = os.environ.get("IG_USERNAME", None) # replace with your Instagram username
password = os.environ.get("IG_PASSWORD", None) # replace with your Instagram password

ig = Instagram(username=username, password=password)

if not os.path.exists(f"./instagram_cookies/{username}_cookies"):
    print("cookies not found")
    try:
        print("attempting login")
        user = ig.login()
        print(f"login successful [{user['username']}]")
    except Exception as e:
        print(str(e))
    print("\n=============\n")

user = ig.get_user("hololive.animation")
print(f"user id: {user.user_id}") # get user id
print(f"username: {user.username}") # get username
print(f"full name: {user.full_name}") # get full name
print(f"category name: {user.category_name}") # get category name
print(f"biography: {user.biography}") # get biography
print(f"following count: {user.following}") # get following count
print(f"followers count: {user.followers}") # get followers count
print(f"posts count: {user.posts_count}") # get posts count
print(f"profile picture: {user.profile_picture}") # get profile picture

stories = user.get_stories()
if stories.media: # check if media exists
    print(stories.media.prettify(indent=2))
```

Source Code: [Github](https://github.com/SukunDev/instagramgrabber)

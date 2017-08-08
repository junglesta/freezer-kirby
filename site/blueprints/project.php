<?php if(!defined('KIRBY')) exit ?>

title: Project
pages: false
files:
  sortable: true
fields:
  title:
    label: Title
    type:  text
  year:
    label: Year
    type:  text
    icon: calendar-o
    width: 1/2
  issue:
    label: Issue
    type:  text
    icon: thumbs-o-up
    width: 1/2   
  tags:
    label: Tags
    type:  tags  
  author:
    label: Author
    type:  text
    icon: user
    help: Who wrote this? 
  text:
    label: Text
    type:  textarea

<?php

echo page('projects')->children()->visible()->flip()->limit(50)->feed(array(
  'title'       => $page->title(),
  'description' => $page->description(),
  'link'        => 'projects',
));

?>

<ul class="teaser cf">
  <?php foreach(page('projects')->children()->visible() as $project): ?>
  <li>
    <a title="<?php echo html($project->title()) ?>" href="<?php echo $project->url() ?>">
      <h3><?php echo html($project->title()) ?></h3>
      <p><?php echo excerpt($project->text(), 400) ?></p>
      <?php if($image = $project->images()->sortBy('sort', 'asc')->first()): ?>
        <img src="<?php echo $image->url() ?>" alt="<?php echo html($project->title()) ?>" >
      <?php endif ?>
    </a>
  </li>
  <?php endforeach ?>
</ul>

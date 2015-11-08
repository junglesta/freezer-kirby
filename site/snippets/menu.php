<nav role="navigation" class="topnav">

  <ul class="menu cf">
    <?php foreach($pages->visible() as $p): ?>
    <li class="brick">
      <a title="<?php echo html($p->title()) ?>" class="brick-front"  href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a>

      <?php if($p->hasVisibleChildren()): ?>
      <ul class="submenu hidden" id="submenu">
        <?php foreach($p->children()->visible() as $p): ?>
        <li class="brick">
          <a class="brick-front" href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a>
        </li>
        <?php endforeach ?>
      </ul>
      <?php endif ?>

    </li>
    <?php endforeach ?>
  </ul>

</nav>

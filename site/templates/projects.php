<?php snippet('header') ?>

	<header class="header cf" role="banner">

    <?php snippet('menu') ?>

  </header>

  <main class="main projects" role="main">

    <div class="text">    

      <h1><?php echo $page->title()->html() ?></h1>

      <?php echo $page->text()->kirbytext() ?>

    </div>

    <?php snippet('projects') ?>

  </main>

<?php snippet('footer') ?>

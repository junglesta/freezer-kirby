<?php snippet('header') ?>
	
	<header class="home header cf" role="banner">

    <?php snippet('menu') ?>

    <div class="cf">
      <figure class="illu classic">
        <?php include("assets/images/freezer-classic.svg"); ?>
      </figure>
    </div>

  </header>
  
  <main class="main home" role="main">

    <div class="text">
      
      <h1><?php echo $page->title()->html() ?></h1>
      
      <?php echo $page->text()->kirbytext() ?>
    
    </div>

    <?php snippet('projects') ?>

  </main>

<?php snippet('footer') ?>

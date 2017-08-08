<?php snippet('header') ?>
  
  <header class="header cf" role="banner">

    <?php snippet('menu') ?>

    <a class="gohome cf" href="<?php echo url() ?>">
      <?php 
        // if Icon exists display it (usign string concatenation) 
        if(!$page->icon()->empty()): 
      ?>

      <div class="illu <?php echo $page->icon() ?>">

        <object type="image/svg+xml" data="<?php echo url('assets/images/freezer-'.$page->icon().'.svg') ?>">frz Logo <!-- fallback image in CSS --></object>


      </div> 

      <?php endif ?>
    </a>
  </header>

  <main class="main project" role="main">  

    <h1 itemprop="headline"><?php echo $page->title()->html() ?></h1>
    
    <div class="headbeard">

      <ul class="meta cf">
        
        <?php // if Year exists display it ?>
        <?php if(!$page->year()->empty()): ?>
        <li><em>Year</em> <?php echo $page->date('Y', 'year') ?></li>
        <?php endif ?>
        
        <?php // if Issue exists display it ?>
        <?php if(!$page->issue()->empty()): ?>
        <li><em>Freezer Magazine</em> <?php echo $page->issue() ?></li>
        <?php endif ?>

        <?php // if Tags exist display 'em ?>
        <?php if(!$page->tags()->empty()): ?>
        <li><em>Tags</em> <?php echo $page->tags() ?></li>
        <?php endif ?>

        <?php // if Author exists display it ?>
        <?php if(!$page->author()->empty()): ?>
        <li><em>Author</em> <?php echo $page->author() ?></li>
        <?php endif ?> 

        <li>
          <em>Reading Time</em> 
          <?php echo $page->text()->readingtime(array(
            'minute'  => 'min',
            'minutes' => 'min',
            'second'  => 'sec',
            'seconds' => 'sec'
          )); ?>
        </li>
        
      </ul>

      <div class="kudoswrap">
        <div class="kudos" data-amount="0" data-url="<?php echo $page->url() ?>"></div>
      </div>
      
    </div>



    <div class="text">

      <?php echo $page->text()->kirbytext() ?>

    </div>

    <div class="share">
      
      <a href="https://plus.google.com/share?url=<?php echo rawurlencode ($page->url()); ?>&title=<?php echo rawurlencode($page->title()); ?>" target="blank" title="Share on Google+">Google+</a>
      &nbsp;
      <a href="http://www.facebook.com/sharer.php?u=<?php echo rawurlencode ($page->url()); ?>" target="blank" title="Share on Facebook">Facebook</a>
      &nbsp;
      <a href="https://twitter.com/intent/tweet?source=webclient&text=<?php echo rawurlencode($page->title()); ?>%20<?php echo rawurlencode($page->url()); ?>%20<?php echo ('via @rokmatwit')?>" target="blank" title="Tweet this">Tweet</a>

    </div>

    
    <nav class="brick nextprev cf" role="navigation">

      <?php if($next = $page->nextVisible()): ?>
      <?php // cookie bind keyboard via js ?>
      <?php setcookie("navNext", $next->url()); ?>

      <a class="brick-front next" href="<?php echo $next->url() ?>">
        <span><?php echo $next->title() ?></span>
        <?php include("assets/images/right.svg"); ?>
      </a>
      <?php endif ?>


      <?php if($prev = $page->prevVisible()): ?> 
      <?php // cookie bind keyboard via js ?>
      <?php setcookie("navPrev", $prev->url()); ?>

      <a class="brick-front prev" href="<?php echo $prev->url() ?>">
        <?php include("assets/images/left.svg"); ?>
        <span><?php echo $prev->title() ?></span>
      </a>
      <?php endif ?>

    </nav>


  </main>

<?php snippet('footer') ?>

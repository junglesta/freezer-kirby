<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'put_your_licence_no_here');

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/


c::set('routes', array(
    array(
        'pattern' => 'sitemap.xml',
        'action'  => function() {
            return site()->visit('sitemap');
        }
    ),
    array(
        'pattern' => 'sitemap',
        'action'  => function() {
            return go('sitemap.xml');
        }
    )
));



c::set('cache', true);
// avoid caching of the sitemap file like this:
c::set('cache.ignore', array('home','sitemap'));

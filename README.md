# Go-Phish

Exploring some development ideas with a (somewhat graceless) Todo App!

Start tracking your todo's today:
http://ruby-on-rails-125022.nitrousapp.com:3000/


## Notes

* It's clear I haven't written any Ruby code on my Mac at home in a long time. Was still rockin' the
  2.0.0 preview installed with the OS. Rather than spend time getting that updated I tried out
  nitrous.io.  It's awesome. I may never create my own development environment again.

* For the app styles, I decided to test out Google's Material Design Lite since I had not used it
  before. I've not really a big fan of it yet. There's some interesting components, but the stock
  styles don't cover a lot of the basics. You have to dig into the component pages, which are
  separate, so it's not clear what styles are available in the framework and which are just general
  Material Design concepts. I generally prefer Bootstrap's styles and documentation approach still
  at this point.

* For the main project listing, I'm not sure that a card style is really the best UX approach, but
  this was a test to see what they looked like.

* For sorting items, I went with a client-side JS/CSS ordering using flexbox under the assumption
  that this app would probably be used on devices with modern browsers. If we need to support
  users with older devices and browsers, we would need to change this approach up a bit. Additionally,
  if there end up being lots of projects or items to sort through, we may move the sorting logic
  back to the server.
  
* The MDL sort menu on the project list hides the app navbar when it's expanded for some reason. I didn't
  have time to figure out why that is happening. It also doesn't appear to work on my iPhone. I'm
  guessing I have some MDL styles used in the wrong place and I didn't have time to debug it further.
  The menu is at least function on Chrome/Mac so it shows the sorting function working.
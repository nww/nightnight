# night night
nightnight is a simple program that allows you to put your website to sleep, encouraging your users to go to sleep better supporting their health and well being.

The project seeks to highlight issues of sleep debt, how technology contributes to these issues, and to engage technology creators with New Kind of Design and the concept of Universal Responsibility.

nightnight was created for [Masamichi Souzou](http://mmsz.co) by the team at [Neeley Worldwide](http://neeleyworldwide.com).

For more information contact → 1@mmsz.co

# Install

There are two ways to install nightnight on your website. 

#### Quick Install

The first option is to simply drop in the line of code below on your website, at the very end of the page just above the `</body>` tag.

```
<script async=true src="https://wwww.neeleyworldwide.com/0600/2200/nightnight.js"></script>
```

And you're all set! Great work! You are taking a big step to care for your users and taking universal responsibility for your design.



#### Full Install

The second option is to host all of the pages on your site.
```
<script>
var d = new Date();
if (d.getHours() >= 6 && d.getHours() <= 22) {
  $(".nightnight").hide();
} else {
  $(".nightnight").show();
}
</script>
```
Next drop the following html onto the page you would like to have nightnight appear.

```
<div class="nightnight">Its late…
  <br> Nothing we can offer you is more important than your sleep.
  <br> Sleep well, sweet dreams, and we will catch you in the AM.
  <div class="timing">This site will wake up at 6:00am</div>
  <div class="skip">
    <a href="">Nah, I’ll sleep later, I really need to use this site right now →</a>
  </div>
  <div class="credits">
   <a href="https://github.com/nww/night-night"><img src="http://neeleyworldwide.com/night_night_white.png" alt="night night" height="27px"></a>&nbsp; &nbsp;from&nbsp; &nbsp;
    <a href="http://mmsz.co"><img src="http://neeleyworldwide.com/mmsz_white.png" alt="mmsz" height="27px"></a> &nbsp; &nbsp;by &nbsp; &nbsp;
    <a href="http://neeleyworldwide.com"><img src="http://neeleyworldwide.com/neeley_worldwide_white.png" alt="Neeley Worldwide" height="30px">
  </div>
</div>
```

Next drop the following css into your existing css file.

```
/* 
/////////////////////////////
night night css
/////////////////////////////
*/

.nightnight {
  background: #000;
  font-family: Arial, sans-serif;
  color: #fff;
  font-size: 12px;
  padding: 10%;
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

input,
button,
submit {
  border: none;
  background: none;
  font-style: italic;
}

.nightnight a:link {
  color: #555;
}

.nightnight a:visited {
  color: #555;
}

.nightnight a:hover {
  color: #FFF;
}

.timing {
  font-size: 15px;
  font-weight: 900;
  margin-top: 20px;
}

.skip {
  font-style: italic;
  font-size: 10px;
  margin-top: 40px;
}

.credits {
  position: fixed;
  bottom: 20px;
  right: 20px;
  margin-top: 40px;
  font-size:8px;
}
```


####Adjusting the time. 

If you'd like you can adjust the times of the quick install for wake and sleep for your site. We suggest 6am `0600` and 10pm `2200` as default wake and sleep time, but you can change these times in the script. For example if we want to wake up at 6:30am and 11pm then the script is adjusted to the following. 

```
<script async=true src="https://wwww.neeleyworldwide.com/0630/2300/nightnight.js"></script>
```


# About

#### Sleep Debt
Sleep depervation is one of the 


#### NKD

New Kind of Design is an approach that seeks to encorporate a number. This project seeks to highlight issues of Universal Responsibility. When we create products, we often don't consider the all implications of our designs. 

We believe creators have a responisbility to their user that includes the users overall health and well being. Is the beer manufacturer.

# Credits

#### Masamichi Souzou

mmsz is a New Kind of Company, working to solve for human happiness through the consideration of everything. Globally, current business & design practicies tend to optimize for profit and fail to consider the larger cummulative impact of these activities over time, which can inveitably lead to catastrophic collapse of systems, like the obesity epedemic, global finacial instability, and climate change. We believe there are solutions. Masamichi Souzou (正道想像) is Japanese for "Correct Path, Imagined/Created." At mmsz want to know what the world would look like if we optimize everything, not for profit or growth, but for happiness. We are building that world.

Learn more at → http://mmsz.co


#### Neeley Worldwide

Neeley Worldwide is a consultancy with expertise in Service Design, Speculative Design, Design Research, and Strategy. Neeley Worldwide provides organizaitons support through project research, design, and delivery, also offering prototyping services, and workshops, lectures, and design training. 

Learn more at → http://neeleyworldwide.com


#### J. Paul Neeley

J. Paul Neeley is an American Designer and Researcher based in London. He has a background in Service Design, Speculative Design, Design Research, and Strategy. J. Paul enjoys exploring the social, cultural, economic, and ethical implications of emerging technologies, designing speculative futures to help organizations reframe their understanding of the current state, and find new opportunities moving forward. Recent projects have focused on happiness, healthcare, AI, self quantification, future mobility, synthetic biology, and issues of complexity and computational irreducibility in design and business. 

Other projects: Creative AI @ http://yossarian.co, Happiness Optimization @ http://mmsz.co, and New Kind of Design @ http://nkd.is

Learn more at → http://jpaulneeley.com


#### Håkon Eide

Håkon Eide is a Norwegian Computer Scientist based in London. Håkon has a wide ranging development skill set and interests, with expertise in Go & React frameworks. As the co-founder & CTO of Swipe.to Håkon developed cutting edge back end IP to enable real-time engagement on a new kind of presentation framework. 

Learn more at → https://twitter.com/_hakon_



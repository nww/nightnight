<img src="http://neeleyworldwide.com/night_night_everyone.png" width="400">

(みんな is Japanese for "Everyone")

nightnight is a simple program that allows you to put your website to sleep, encouraging your users to go to head to bed, better supporting their health and well being.

The project seeks to highlight the public issues of sleep debt, how technology contributes to these issues, and to engage technology creators with New Kind of Design and the concept of Universal Responsibility. 

nightnight was created by [Masamichi Souzou](http://mmsz.co) and built by the team at [Neeley Worldwide](http://neeleyworldwide.com). 

Copyright (c) 2016 Masamichi Souzou and distrubuted under the The MIT License (MIT)

For more information or press inquiries contact → 1@mmsz.co

# Install

There are two ways to install nightnight on your website. 

#### Quick Install

The first option is to simply drop in the single line of code below onto your website at the very end of the page just above the `</body>` tag, and we'll do the rest.



```
<script async src="https://www.nightnight.xn--q9jyb4c//0600/2200/nightnight.js"></script>
```

And you're all set! Great work! You are taking a big step to care for your users and take universal responsibility for your design.



#### Full Install

The second option is to host all of the night night tool on your own site. You can do this by dropping in the script below on the html page of your site just above the `</body>` tag. 

```
<script>
var d = new Date();
if (d.getHours() >= 6 && d.getHours() <= 22) {
  $(".nightnight").hide();
} else {
  $(".nightnight").show();
}
</script>

<div class="nightnight">Its late…
  <br> Nothing we can offer you is more important than your sleep.
  <br> Sleep well, sweet dreams, and we will catch you in the AM.
  <div class="timing">This site will wake up at 6:00am</div>
  <div class="skip">
    <a href="">Nah, I’ll sleep later, I really need to use this site right now →</a>
  </div>
  <div class="credits">
   <a href="https://github.com/nww/night-night"><img src="http://neeleyworldwide.com/night_night_everyone_white.png" alt="night night" height="32px"></a>&nbsp; &nbsp;from&nbsp; &nbsp;
    <a href="http://mmsz.co"><img src="http://neeleyworldwide.com/mmsz_white.png" alt="mmsz" height="32px"></a> &nbsp; &nbsp;by &nbsp; &nbsp;
    <a href="http://neeleyworldwide.com"><img src="http://neeleyworldwide.com/neeley_worldwide_white.png" alt="Neeley Worldwide" height="35px">
  </div>
</div>

<style>
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
  font-size:9px;
}
</style>

```


####Adjusting the time. 

If you'd like you can adjust the times of the quick install for wake and sleep for your site. We suggest 6am `0600` and 10pm `2200` as default wake and sleep time, but you can change these times in the script. For example if we want to wake up at 6:30am and 11pm then the script is adjusted to the following. 

```
<script async=true src="https://wwww.neeleyworldwide.com/0630/2300/nightnight.js"></script>
```


# About

#### Sleep Debt
Sleep deprivation is one of the major health issues facing modern society.

> Sleep deficiency is a common public health problem in the United States. People in all age groups report not getting enough sleep.

> As part of a health survey for the Centers for Disease Control and Prevention, about 7–19 percent of adults in the United States reported not getting enough rest or sleep every day.  

> Nearly 40 percent of adults report falling asleep during the day without meaning to at least once a month.  Also, an estimated 50 to 70 million Americans have chronic (ongoing) sleep disorders.

> Sleep deficiency is linked to many chronic health problems, including heart disease, kidney disease, high blood pressure, diabetes, stroke, obesity, and depression.

> Sleep deficiency also is associated with an increased risk of injury in adults, teens, and children. For example, driver sleepiness (not related to alcohol) is responsible for serious car crash injuries and death. In the elderly, sleep deficiency might be linked to an increased risk of falls and broken bones.

> In addition, sleep deficiency has played a role in human errors linked to tragic accidents, such as nuclear reactor meltdowns, grounding of large ships, and aviation accidents.

> A common myth is that people can learn to get by on little sleep with no negative effects. However, research shows that getting enough quality sleep at the right times is vital for mental health, physical health, quality of life, and safety.

→ http://www.nhlbi.nih.gov/health/health-topics/topics/sdd


#### NKD

Globally, current business & design practicies tend to optimize for profit or human centerenedness and fail to consider the larger cummulative impact of these activities over time, which can inveitably lead to catastrophic collapse of systems, like the obesity epedemic, global finacial instability, and climate change. We believe new apparches are urgently needed. New Kind of Design is a outlook and approach that seeks to encorporate a number of techniques and methods into the design process that work to mitigate the catastrophic cummulative negative impacts of current design and business approaches. 

For example, creators rarely consider the ALL of the implications of their designs, and this limited scope can significantly negatively impact the larger system. We believe creators have a universal responisbility to the entire system and to their individual users, including the users overall health and well being. This expanded purview leads to new and exciting opportunities for designers to support human and system needs through technology. 

→ http://nkd.is


# Credits

#### Masamichi Souzou

mmsz is a New Kind of Company, working to solve for human happiness through the consideration of everything. Masamichi Souzou (正道想像) is Japanese for "Correct Path, Imagined/Created." At mmsz want to know what the world would look like if we optimize everything, not for profit or growth, but for happiness. We are building that world.

→ http://mmsz.co


#### Neeley Worldwide

Neeley Worldwide is a consultancy with expertise in Service Design, Speculative Design, Design Research, and Strategy. Neeley Worldwide provides organizaitons support through project research, design, and delivery, also offering prototyping services, and workshops, lectures, and design training. 

→ http://neeleyworldwide.com


#### J. Paul Neeley

J. Paul Neeley is an American Designer and Researcher based in London. With a background in Service Design, Speculative Design, Design Research, and Strategy, he enjoys exploring the social, cultural, economic, and ethical implications of emerging technologies. J. Paul designs speculative futures to help organizations reframe their understanding of the current state, and find new opportunities moving forward. Recent projects have focused on happiness, healthcare, AI, self quantification, future mobility, synthetic biology, and issues of complexity and computational irreducibility in design and business. 

Other projects: Creative AI @ http://yossarian.co, Happiness Optimization @ http://mmsz.co, and New Kind of Design @ http://nkd.is

→ http://jpaulneeley.com


#### Håkon Eide

Håkon Eide is a Norwegian Computer Scientist based in London. Håkon has a wide ranging development skill set and interests, with expertise in Go & React frameworks. As the co-founder & CTO of Swipe.to Håkon developed cutting edge back end IP to enable real-time engagement on a new kind of presentation framework. 

→ https://twitter.com/_hakon_



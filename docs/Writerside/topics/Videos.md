# Videos

<show-structure depth="2" />

Mit dem `<video>`-Element kann man Videos auf seiner Webseite einbauen.

Dafür braucht man noch zwei Attribute:

- `src` - Der Pfad zum Video
- `controls` - Steuerung für Video aktivieren

```HTML

<video src="rabbit320.webm" controls>
    <p>
        Your browser doesn't support HTML video. Here is a
        <a href="rabbit320.webm">link to the video</a> instead.
    </p>
</video>
```

Der Text im `<video>`-Element ist dafür da, falls das Video nicht angezeigt werden kann.

Darüber hinaus gibt es noch weitere Attribute, die bspw. das Video automatisch abspielen oder gemuted sind:

```HTML

<video controls width="400" height="400" autoplay loop muted preload="auto" poster="poster.png">
    <source src="rabbit320.mp4" type="video/mp4"/>
    <source src="rabbit320.webm" type="video/webm"/>
    <p>
        Your browser doesn't support this video. Here is a
        <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
</video>
```

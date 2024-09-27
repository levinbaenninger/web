# Audio

<show-structure depth="2" />

Das `<audio>`-Element wird dafür benutzt, Audiodateien in seine Webseite einzubinden.

Der Aufbau ist derselbe, wie beim `<video>`-Element, nur dass es die Attribute `poster`, `height` und `width` nicht gibt.

```HTML

<audio controls>
    <source src="viper.mp3" type="audio/mp3"/>
    <source src="viper.ogg" type="audio/ogg"/>
    <p>
        Your browser doesn't support this audio file. Here is a
        <a href="viper.mp3">link to the audio</a> instead.
    </p>
</audio>
```

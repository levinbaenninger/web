# Mathematik

In SCSS können wir Multiplikation, Addition, Subtraktion und Division ganz einfach ausführen:

````CSS
$font-size-sm: $base-font-size * 0.75;
$font-size-lg: $base-font-size * 1.5;
$font-size-xl: $base-font-size * 2;
$font-size-xxl: $base-font-size * 3;
````

> **Wichtig:** Bei der Division kann es zu Problemen kommen, dafür können wir das Math-Modul nutzen:
> 
> ````CSS
> @use 'sass:math';
> 
> .card {
>   ...
>   border-radius: math.div($base-border-radius, 4);
>   ...
> }
> ````
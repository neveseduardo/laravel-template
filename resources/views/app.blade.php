<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel App</title>

        @vite('resources/sass/app.scss')
        @vite('resources/ts/app.ts')
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>

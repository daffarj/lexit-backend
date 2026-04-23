<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title inertia>Lexit - Dyslexia Care</title>
        <meta name="description" content="Platform AI untuk deteksi dini dan terapi disleksia pada anak Indonesia">

        <!-- Fonts sudah ada di CSS, tidak perlu tag link tambahan -->

        @routes
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-[#F7F5F2]">
        @inertia
    </body>
</html>
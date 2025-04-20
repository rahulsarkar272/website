<!doctype html>
<html>
<head>
   @include('includes.head')
</head>
<body>
<header class="header_section">
       @include('includes.header')
</header>
<div class="container">
           @yield('content')
   <footer class="row">
       @include('includes.footer')
   </footer>
</div>
</body>
</html>
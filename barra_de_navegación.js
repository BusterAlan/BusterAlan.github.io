var navBar = document.getElementById('barraNav').innerHTML = 

`    
<nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #e3f2fd;">
<div class="container-fluid">
    <a class="navbar-brand" href="index.html">Inicio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Problemáticas</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#scrollspyHeading1">Las filas y el órden</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#scrollspyHeading3">Conclusiones variadas</a></li>
               </ul>
            </li>
        <li class="nav-item">
            <a class="nav-link" href="#credits">Acerca de nosotros</a>
        </li>
        </ul>
        <form class="d-flex" role="search">
            <button class="btn btn-outline-success" type="submit">Gracias por tu visita</button>
        </form>
    </div>
</div>
</nav>

`
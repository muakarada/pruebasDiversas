<template>
    <div class="header">
        <div class="container">
            <!--Barra de navegación-->
            <b-navbar class="navBibliotech" toggleable="md">
                <a ref="">Inicio</a>
                <b-navbar-toggle target="navbar-toggle-collapse">
                <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
                </b-navbar-toggle>
            </b-navbar>
        </div>
    </div>

</template>

<style>
    .navBibliotech{
        background-color: red;
    }

</style>
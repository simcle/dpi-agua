<template>
  <div id="app">
    <i class="icon-home"></i>
    <div class="text-red-500">HALLLO</div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>


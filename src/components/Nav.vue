<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul class="navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/profile">Profile</a></li>
        </ul>
    </nav>
</template>

<style scoped>
ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color:red;
}

li{
    display:inline-block;
    margin:10px 20px;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    border: 1px solid black;
}
li a:hover {
    background-color:black;
}


</style>

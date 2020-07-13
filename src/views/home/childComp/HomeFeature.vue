<template>
    <div id='feature'>
        <slot v-for="(item,index) in 2" :key="index"></slot>
    </div>
</template>
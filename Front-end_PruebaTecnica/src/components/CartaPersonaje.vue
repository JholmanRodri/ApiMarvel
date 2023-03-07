<template>
    <div class="card">
        <img :src="personaje.thumbnail" alt="" class="card-image">
        <div class="card-container">
            <h3 class="card-title card-header">{{ personaje.name }}</h3>
            <p class="card-description">{{ personaje.description.slice(0, 300) }}</p>
            <p> {{ }} </p>
        </div>
    </div>

</template>

<script>
export default {
    props: ['personaje']
}
</script>


<style lang="scss">
.card {
    background-color: #fff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 300px;
    height: 400px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    height: 100%;
    &:hover {
        transform: scale(1.1);

        h3 {
            color: var(--text-orange);
        }
    }
    span {
        color: var(--text-gray);
    }
    h3 {
        margin-bottom: 0.3rem;
    }
}
.card-header {
  background-color: #7f7fd5;
  color: #fff;
  padding-left: 50px;
  padding-right: 50px;
}
.card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
}</style>
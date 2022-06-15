<template>
    <div class="start-up">

        <h1>Welcome to Math Quiz</h1>
        <a href="com.boost.alpha.app://test">test me</a>
        <div class="field">
            <label>Number of Questions: </label>
            <input v-model="questionCount" />
        </div>
        <button id="start">
            Start Quiz
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            questionCount: 100
        }
    },
    methods: {
    },
}
</script>
<style scoped>
.start-up {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 10% 0;
}



label {
    text-align: center;
}

input {
    text-align: center;
}

#start {
    margin: 20px 0;
}
</style>
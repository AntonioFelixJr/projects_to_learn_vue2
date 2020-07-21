<template>
  <div class="drop-zone" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent >
        <Task v-for="task in dropezoneTasks" :key="task.name" :task="task" />
  </div>
</template>

<script>
import Task from '@/components/Task'

export default {
    data() {
        return {
            dropezoneTasks: []
        }
    },
    components: {
        Task
    },
    props: {
        tasks:{
            type: Array,
            required: true
        }
    },
    methods: {
        onDrop (evt) {
            const itemID = evt.dataTransfer.getData("itemID")
            const item = this.tasks.find(item => {
                if (item.name == itemID) item.category = 'devTask'
            })

            console.log(this.tasks)
        }
    }
}
</script>

<style>
    .drop-zone {
        background-color: white;
        height: 200px;
        width: 100%;
        display: flex;
    }

</style>
<template>
  <div @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
    <h1 class="task-grid-title">{{ title }}</h1>
    <hr>
    <div id="task-grid-container">
        <Task v-for="task in tasksFilter" :key="task.name" :task="task" @task-deleted="$emit('task-deleted', $event)" />
        <p v-if="tasksFilter.length === 0">
            Sem tarefas
        </p>
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task'
export default {
    components: {
        Task
    },
    props: {
        title: {
            type: String,
            default: "Tarefas"
        },
        tasks: {
            type: Array,
            required: true
        }
    },
    methods: {
        onDrop (evt) {
            const itemID = evt.dataTransfer.getData("itemID")
            this.tasks.find(item => {
                if (item.name == itemID) item.category = this.title
            })
        }
    },
    computed: {
        tasksFilter() {
            return this.tasks.filter(task => task.category == this.title)
        }
    },
}
</script>

<style>
    #task-grid-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .task-grid-title {
        text-align: center;
        user-select: none;
    }

    #task-grid-container p {
        font-size: 24px;
        user-select: none;
    }

    hr {
        user-select: none;
    }

</style>
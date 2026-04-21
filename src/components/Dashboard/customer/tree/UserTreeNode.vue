<template>
    <div class="flex flex-col items-center">
        <div class="relative flex flex-col items-center group">
            <div :class="[
                'w-32 p-3 border-2 rounded-lg shadow-lg text-center z-10 transition-transform hover:scale-105 bg-white dark:bg-slate-800',
                user?.id ? 'border-[#A3D921]' : 'border-dashed border-slate-300 dark:border-slate-700'
            ]">
                <div class="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <i :class="['fa-solid text-lg', user?.id ? 'fa-user text-[#A3D921]' : 'fa-plus text-slate-400']"></i>
                </div>
                
                <h4 class="text-xs font-bold truncate dark:text-white">
                    {{ user?.name || 'Available' }}
                </h4>
                
                <p v-if="user?.id" class="text-[10px] text-blue-500 font-mono">D{{ user.id }}</p>
                
                <div v-if="user?.id" class="flex justify-between text-[9px] mt-1 text-gray-500">
                    <span>L:{{ user.left_count || 0 }}</span>
                    <span>R:{{ user.right_count || 0 }}</span>
                </div>
                
                <div v-if="user?.id" class="text-[9px] mt-1">
                    <span class="text-green-500 font-bold uppercase">Active</span>
                </div>
                <div v-else class="text-[9px] mt-1 text-slate-400 uppercase font-bold">
                    Empty
                </div>
            </div>

            <div v-if="user?.children && user.children.length > 0" class="w-px h-8 bg-slate-300 dark:bg-slate-700"></div>
        </div>

        <div v-if="user?.children && user.children.length > 0" class="flex relative">
            <div class="absolute top-0 left-[25%] right-[25%] h-px bg-slate-300 dark:bg-slate-700"></div>

            <div class="flex gap-8">
                <div class="relative pt-8">
                    <div class="absolute top-0 right-0 w-1/2 h-px bg-slate-300 dark:bg-slate-700"></div>
                    <div class="absolute top-0 right-1/2 w-px h-8 bg-slate-300 dark:bg-slate-700"></div>
                    <UserTreeNode :user="user.children[0]" />
                </div>

                <div class="relative pt-8" v-if="user.children.length > 1">
                    <div class="absolute top-0 left-0 w-1/2 h-px bg-slate-300 dark:bg-slate-700"></div>
                    <div class="absolute top-0 left-1/2 w-px h-8 bg-slate-300 dark:bg-slate-700"></div>
                    <UserTreeNode :user="user.children[1]" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  user: Object
});
</script>
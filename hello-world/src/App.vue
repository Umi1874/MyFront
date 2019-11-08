<template>
    <div id="app">
        <el-container direction=‘vertical’>
            <el-aside width="200px">
                <div>Aside</div>
            </el-aside>
            <el-container>
                <el-header>
                    <div>Header</div>
                </el-header>
                <el-main>
                    <div>Main</div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "app"
    };
</script>

<style>
    #app {
        height: 100%;
    }

    .el-header,
    .el-footer {
        background-color: #b3c0d1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #d3dce6;
        color: #333;
        text-align: center;
    }

    .el-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
    }

    #app > .el-container {
        margin-bottom: 40px;
        height: 100vh;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>

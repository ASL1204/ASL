<template>
    <!-- Footer -->
    <div class="footer">
      <p>版权所有 &copy; 深圳信息职业技术学院</p>
      <!-- <img src="../assets/sxx.png" alt=""> -->
    </div>
</template>

<style>
    /* 底部样式 */
    .footer {
            background-color: #16407A;
            color: white;
            text-align: center;
            padding: 20px;
            position: relative; /* 相对定位 */
            margin-top: -50px; /* 负边距使 footer 位于内容的最下面 */
            clear: both; /* 清除浮动 */
        }

        .footer p {
            font-size: 14px;
            line-height: 1.5;
        }

        .footer a {
            color: white;
            text-decoration: none;
        }

        .footer a:hover {
            text-decoration: underline;
        }
</style>
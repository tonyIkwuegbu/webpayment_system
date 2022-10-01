<template>
  <div class="" v-for="(item, index) in myList" :key="index">
    <div class="flex-col items-center shadow-lg p-4 w-56 h-56 cursor-pointer">
      <h3 class="py-5">{{ item.title }}</h3>
      <p>{{ item.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      bodyMsg: "This is the body",
      myList: [
        {
          title: "New Subscription",
          message:
            "Do you want to pay for new subscription? please click the button below to proceed.",
        },
        {
          title: "Top Up",
          message:
            "Do you want to top-up your existing subscription? please click the button below to proceed.",
        },
        {
          title: "USSD",
          message:
            "Already generated payment reference via USSD? please click the button below to proceed.",
        },
      ],
    };
  },
};
</script>

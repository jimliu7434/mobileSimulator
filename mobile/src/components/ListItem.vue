<template>
  <div> 
      <table>
        <tr>
          <td rowspan="2" width="60"><span>{{ vc }}</span></td>
          <td style="width: 60%;text-align: left;"><span>{{ title }}</span></td>
          <td style="width: 30%;text-align: center;"><span>{{ showDate }}</span></td>
        </tr>
        <tr>
          <td colspan="2" style="width: 100%;text-align: left;">{{ description }}</td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    vc: Number,
    title: String,
    showDate: String,
    description: String
  }
};
</script>

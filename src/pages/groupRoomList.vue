<template>
    <div class="content">
        <headerCom  :text="text"/>
        <div class="part-1">
           <div class="time-filter">
              <span>选择时间</span>
              <div class="select">
                <!-- <input id="txtSearchDate" type="text" class="p-date" readonly> -->
                <date-picker :date="startTime" v-model="visitDate" :option="option" id="select_date"></date-picker>
              </div>
           </div>
           <div class="time-filter">
              <span>游戏类别</span>
              <div class="select">
                <select name="selectGame" id="selectGame">
                  <option selected="selected" value="0" name="gameType">青岛麻将</option>
                  <option value="1">威海麻将</option>
                  <option value="2">烟台麻将</option>
                </select>
              </div>
           </div>
        </div>
        <div class="part-2">
          <table>
            <thead>
              <tr>
                <td>开房时间</td>
                <td>玩家名称</td>
                <td>房间战绩</td>
                <td>房间状态</td>
              </tr>
            </thead>
            <tbody id="divInfo">
					</tbody>
				</table>
        </div>
        <FooterCom />
    </div>
</template>
<script>
import HeaderCom from "@/components/Header";
import FooterCom from "@/components/Footer";
import $ from "jquery";
import myDatepicker from "vue-datepicker/vue-datepicker-es6.vue";
export default {
  name: "groupRoomList",
  data() {
    return {
      text: "房间列表",
      visitDate:"",
      startTime: {
        time: ""
      },
      endTime: {
        time: ""
      },
      option: {
        type: "day",
        week: ["一", "二", "三", "四", "五", "六", "日"],
        month: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        format: "YYYY-MM-DD",
        placeholder: "请选择日期?",
        inputStyle: {
          display: "inline-block",
          padding: "4px",
          "line-height": "17px",
          "font-size": "14px",
          width: "190px",
          border: "1px solid #ddd",
          // 'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          "border-radius": "5px",
          color: "#5F5F5F"
        },
        color: {
          header: "#ccc",
          headerText: "#f00"
        },
        buttons: {
          ok: "完成",
          cancel: "取消"
        },
        overlayOpacity: 0.5, // 0.5 as default
        placeholder: '请选择日期',
        
        dismissible: true // as true as default
      },
      timeoption: {
        type: "min",
        week: ["一", "二", "三", "四", "五", "六", "日"],
        month: [
         "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        format: "YYYY-MM-DD HH:mm"
      },
      multiOption: {
        type: "multi-day",
        week: ["一", "二", "三", "四", "五", "六", "日"],
        month: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        format: "YYYY-MM-DD HH:mm"
      },
    };
  },
  mounted() {
        var myDate = new Date();
        var year=myDate.getFullYear();
        var month=myDate.getMonth()+1;
        var date=myDate.getDate(); 
        this.visitDate = year + '-' + month + '-' + date
        console.log(this.visitDate)
        // console.log(window.location.href,"href");
        // var url =window.location.href;
        var url ="http://192.168.58.87:8080/#/groupRoomList?flockId=lakjslaslddasa216413154&nike=我是王者"
        var flockId=url.split("?")[1].split("&")[0].split("=")[1];
        var nike=url.split("?")[1].split("&")[1].split("=")[1];
        console.log(flockId,"flockId");
        console.log(nike,"nike")
        sessionStorage.setItem('flockId',flockId);
        function timestampToTime(timestamp) {
          var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000  
          //	        Y = date.getFullYear() + '-';  
          M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
          D = date.getDate() + ' ';
          h = date.getHours();
          m = date.getMinutes();
          //	        s = date.getSeconds();  
          var h = h < 10 ? '0' + h : '' + h;
          var m = m < 10 ? '0' + m : '' + m;
          return M + D + h + ":" + m;
        }
        $.ajax({
          url: "http://192.168.58.252:8080/SpecialHelper/room/selectAll.do",
          type: "GET",
          async: false,
          dataType: 'jsonp',
          cache: "false",
          jsonp: "callbackparam",
          data: {
            "flockId": flockId,
            "nike":nike,
            // "data":
          },
			    success: function(data) {
            console.log(data)
            $("#divInfo").empty();
            var msg = data.data;
            var html = "";
            for(var i = 0; i < msg.length; i++) {
              var timmer = msg[i].roomCreateTime;

              html += "<tr>"
              html += "	<td>" + timestampToTime(timmer) + "</td>"
              html += "	<td>"+msg[i].vcWeixinName+"</td>"
              html += "	<td>"+msg[i].nTotalPoint+"</td>"
              html += "	<td>" + msg[i].nStatus + "</td>"
              html += "</tr>"
              
            }
            $("#divInfo").append(html);

          },
			    error: function(err) {
				    console.log(err,"请求数据失败");
			    }
		});
  },
  methods: {},
  components: {
    HeaderCom,
    FooterCom,
    "date-picker": myDatepicker
  }
};
</script>
<style lang="less" scoped>
@import "../../static/css/global.css";
.cov-date-body[data-v-a9dd0b1a]{
  width:80%;
  // height: 
}
.part-1 {
  margin: 0 2rem;
  .time-filter {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
    span {
      color: #fff;
      margin-right: 1rem;
    }
    .select {
      position: relative;
      display: inline-block;
      border: solid 1px #fff;
      border-radius: 5px;
      input {
        width: 10rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        box-sizing: border-box;
        background: none;
        border: none;
        color: #fff;
      }
      select {
        width: 10rem;
        height: 2rem;
        line-height: 0.2rem;
        text-align: center;
        box-sizing: border-box;
        background: none;
        border: none;
        color: #fff;
      }
    }
  }
}
.part-2 {
  margin: 0 2rem;
  table {
    width: 100%;
    color: #fff;
    background: url(../../static/img/border-v.png) left center no-repeat,
      url(../../static/img/border-v.png) right center no-repeat;
    background-size: 0.2rem 85%;
    thead {
      tr {
        padding: 2rem 0;
        background-image: -webkit-linear-gradient(90deg, #00001a, #1a0e32);
      }
    }
    tr {
      display: flex;
      width: 100%;
      td {
        flex: 1;
        text-align: center;
      }
    }
  }
}
</style>



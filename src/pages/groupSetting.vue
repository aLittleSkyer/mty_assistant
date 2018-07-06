<template>
    <div class="content">
        <HeaderCom :text="text"/>
        <div class="part-1">
          <div class="row">
            <div class="title">游戏设置</div>
            <div class="wrapper hidden">
              <div class="tit">
                <b>●</b> 房间列表对群成员不可见 <input type="checkbox" id="cbHideCrowdStatic" class="chk" />
              </div>
              <a id="aSubmit2" href="javascript:void(0)" class="submit">保 存</a>
            </div>
          </div>
          <form id="formSerialize">
            <div class="row">
               <div class="title">房间设置</div>
               <div class="wrapper hidden">
                 <ul class="my-rule">
                    <li>
												<div class="tit"><b>●</b> 选择游戏&nbsp;
													<div class="select">
														<select name="selectGame" id="selectGame">
															<option selected="selected" value="0" name="gameType">青岛麻将</option>
															<option value="1">威海麻将</option>
															<option value="2">烟台麻将</option>
														</select>
													</div>
												</div>
										</li>
                    <li>
                      <ul class="rule">
                        <li>
													  <div class="tb-tit"><b>●</b> 游戏局数&nbsp;</div>
														<div class="tb-txt gameCount">
															<div class="tb-col"><label><input checked type="radio" name="gameCount" value="0" />4局(4房卡)</label></div>
															<div class="tb-col"><label><input type="radio" name="gameCount" value="1" />8局(房卡)</label></div>
															<div class="tb-col"><label><input type="radio" name="gameCount" value="2"  />12局(房卡)</label></div>
															<div class="tb-col"><label><input type="radio" name="gameCount" value="3" />16局(房卡)</label></div>
														</div>
												</li>
												<li>
														<div class="tb-tit"><b>●</b>支付方式</div>
														<div class="tb-txt payType">
															<div class="tb-col"><label><input checked  type="radio" name="payType" value="1" /><span id="spannIsAA0">房主支付</span></label></div>
															<div class="tb-col"><label><input type="radio" name="payType" value="2" /><span id="spanisShowAAOpen">AA支付</span></label></div>
															<div class="tb-col"><label><input type="radio" name="payType" value="3" /><span id="span1">大赢家支付</span></label></div>
														</div>
												</li>
												<li>
														<div class="tb-tit"><b>●</b> 房间限制</div>
														<div class="tb-txt limit">
															<div class="tb-col"><label><input checked type="checkbox" name="ipLimit" class="chk-2 mark" value="1"/><span>相同房间限制</span></label></div>
															<div class="tb-col"><label><input type="checkbox" name="gpsLimit" class="chk-2" value="1"/><span>GPS限制</span></label></div>
															<div class="tb-col"><label><input type="checkbox" name="lianzhuangAddGameCount" class="chk-2" value="1" /><span>连庄算局数</span></label></div>
															<div class="tb-col"><label><input type="checkbox" name="mustZiMo" class="chk-2" value="1"/><span>必须自摸</span></label></div>
														</div>
												</li>
                        <li id="liTips3" class="showFangfeitips">
                          <div class="tb-tit">收款二维码：</div>
                          <div class="tb-txt">
                            <div class="col">
                              <div class="qrcode">
                                <div class="left js-qrcode" id="divChatRoomAdminPayImages">
                                  <div class="code">
                                    <div class="imgDiv"></div>
                                  </div>
                                </div>
                                <div class="right">
                                  <a class="edit-btn js-rqcode-del">上传
                                    <input type="file" id="hidChatRoomAdminPayImages" />
                                  </a>
                                  <a id="aClearImagePay" class="edit-btn js-rqcode-del">删除</a>
                                </div>
                              </div>
                            </div>
                          </div>
											  </li>
                        <li>
												<div class="tb-txt flex-end">
													<a href="javascript:BASUserGameInsertUpdate('')" class="edit-btn js-rule-save">保存</a>&emsp;
													<a href="javascript:hidulNew()" class="edit-btn js-rule-save">取消</a>&emsp;
												</div>
											</li>
                      </ul>
                    </li>
                 </ul>
               </div>
            </div>
          </form>
          <div class="row">
            <div class="title">群成员设置</div>
						<div class="wrapper hidden">
              <div class="tit"><b>●</b> 群编号</div>
							<p class="name" id="divvcChatRoomSerialNo"></p>
							<div class="tit"><b>●</b> 当前机器人</div>
							<p class="name">昵称：Bridgman</p>
							<p class="qrcode js-qrcode-preview">
								二维码：<img src="http://picture.ewemai.com/sq/20180323/uhh7q37vtmd422mmqrcode061731032318ac0eddadca4106.png">
							</p>
            </div>
          </div>
          <div class="row">
						<div class="title">空间设置 <span class="span5"></span></div>
						<div class="wrapper hidden">
							<div class="tit"><b>●</b> 群主转让</div>
							<p class="name" id="divChatRoomAdminUserName">当前群主：</p>
							<div class="p-flex">转让成员：
								<div>
									<p class="inp inp-small js-seluser" style="width: 11rem"></p>
								</div>
								<div>
									<a id="aShowSelectUser" href="javascript:void(0)" class="edit-btn" style="width: 6rem;">选择成员</a>
								</div>
							</div>
							<a id="aChangeAdmin" href="javascript:void(0)" class="submit">转 让</a>
						</div>
					</div>
        </div>
        <FooterCom />
    </div>
</template>
<script>
import HeaderCom from "@/components/Header";
import FooterCom from "@/components/Footer";
import $ from 'jquery'

export default {
  name: "groupSetting",
  data() {
    return {
      text: "群设置"
    };
  },
  mounted(){                                                               
    this.getList();
    $("#divvcChatRoomSerialNo").html(sessionStorage.getItem("flockId"))
  },
  methods : {
    getList : function(){
      $(".row .title").click(function() {
					if($(this).next().hasClass("hidden")){
							$(".row .title").removeClass("active");
							$(".row .title").next().hide();
							$(this).addClass("active");
							$(this).next().show();
					}else{
							$(this).removeClass("active");
							$(this).next().hide();
				  }
			})
    }
  },
  components: {
    HeaderCom,
    FooterCom
  }
};
</script>
<style lang="less" scoped>
@import "../../static/css/global.css";
.part-1 {
  margin: 0 1.5rem;
  color: #fff;
  .row {
    padding: 1.5rem 0.5rem;
    border-bottom: dashed 1px #fff;
    .title {
      position: relative;
      color: #7ecef4;
      font-size: 1.3rem;
      cursor: pointer;
    }
    .title:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      margin-top: -0.9rem;
      width: 1.5rem;
      height: 1.5rem;
      background: url(../../static/img/icon-13.png) center no-repeat;
      background-size: auto 100%;
      transform: rotate(-90deg);
      transition: all 0.3s;
    }
    .hidden{
      display: none;
    }
    .wrapper {
      .tit {
        font-size: 1.1rem;
        position: relative;
        margin: 1rem 0;
        .chk {
          position: relative;
          top: -0.3rem;
          -webkit-appearance: none;
          width: 3.8rem;
          height: 3.8rem;
          background: transparent;
          border: none;
          outline: none;
          vertical-align: middle;
          cursor: pointer;
        }
        .chk:checked:before {
          background-position-x: 100%;
        }
        .chk:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url(../../static/img/icon-08.png) 0 center no-repeat;
          background-size: 200% auto;
          cursor: pointer;
        }
      }
      .submit {
        margin: 0.7rem auto 0 auto;
        display: block;
        width: 8rem;
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: 0.9rem;
        border-radius: 5px;
        color: #333;
        text-align: center;
        background-image: -webkit-linear-gradient(90deg, #adadae, #f1f1f1);
        box-sizing: border-box;
        white-space: nowrap;
      }
      .my-rule {
        padding: 1rem;
        border-radius: 5px;
        background-image: -webkit-linear-gradient(90deg, #00001a, #1a0e32);
        border: solid 1px #1a0e32;
        box-sizing: border-box;
        .select {
          position: relative;
          display: inline-block;
          border: solid 1px #fff;
          border-radius: 5px;
          select {
            border: none;
            width: 100%;
            height: 100%;
            background: transparent;
            color: #fff;
          }
        }
        .tb-tit {
          padding: 0.5rem 0;
          box-sizing: border-box;
          cursor: pointer;
        }
        .tb-txt {
          flex: 1;
          display: -webkit-flex;
          align-items: center;
          flex-wrap: wrap;
          overflow: hidden;
          .tb-col {
            padding: 0.5rem 0.2rem;
            box-sizing: border-box;
            cursor: pointer;
          }
          .qrcode {
            display: -webkit-flex;
            align-items: center;
            .code {
              width: 5rem;
              height: 5rem;
              border-radius: 5px;
              overflow: hidden;
              background: #fff;
            }
          }
        }
        .chk-2:checked {
          background-position-x: 100%;
        }
        .chk-2 {
          position: relative;
          // top: -0.015rem;
          // margin: 0 0.05rem 0 0;
          -webkit-appearance: none;
          background: transparent;
          border: none;
          outline: none;
          vertical-align: middle;
          cursor: pointer;
          width: 2rem;
          height: 2rem;
          background: url(../../static/img/icon-15.png) no-repeat;
          background-size: auto 100%;
        }
        .showFangfeitips {
          display: flex;
          .left {
            .code {
              width: 4.5rem;
              height: 4.5rem;
              border-radius: 5px;
              overflow: hidden;
              background: #fff;
            }
          }
          .right {
            display: -webkit-flex;
            flex-direction: column;
            padding-left: 1rem;
            a {
              width: 4rem;
              height: 1.7rem;
              line-height: 1.7rem;
              margin: 0.5rem 0;
              position: relative;
              border-radius: 5px;
              color: #333 !important;
              text-align: center;
              background-image: -webkit-linear-gradient(
                90deg,
                #adadae,
                #f1f1f1
              );
              input {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
              }
            }
          }
        }
        .flex-end {
          justify-content: flex-end !important;
          a {
            width: 4rem;
            height: 1.7rem;
            line-height: 1.7rem;
            border-radius: 5px;
            color: #333 !important;
            text-align: center;
            background-image: -webkit-linear-gradient(90deg, #adadae, #f1f1f1);
          }
        }
      }
      .qrcode {
        display: -webkit-flex;
        align-items: center;
        img {
          margin: 0 0.5rem;
          width: 4rem;
          border-radius: 0.3rem;
          cursor: pointer;
        }
      }
      p {
        padding: 0.25rem 0;
        cursor: pointer;
      }
      .p-flex {
        padding: 0.025rem 0;
        display: -webkit-flex;
        align-items: center;
        .inp-small {
          width: 100%;
          padding: 1rem;
          height: 2.3rem;
          line-height: 2.3rem;
          box-sizing: border-box;
          border: solid 1px #fff;
          background: transparent;
          border-radius: 5px;
          color: #fff;
          display: inline-block;
          margin: 0 0.05rem;
          width: 0.7rem;
          height: 0.2rem;
          line-height: 0.2rem;
          text-align: center;
          cursor: pointer;
        }
      }
      .edit-btn {
        display: inline-block;
        width: 4rem;
        height: 2rem;
        line-height: 2rem;
        border-radius: 5px;
        color: #333 !important;
        text-align: center;
        background-image: -webkit-linear-gradient(90deg, #adadae, #f1f1f1);
        margin-left: 0.5rem;
      }
    }
  }
}
</style>


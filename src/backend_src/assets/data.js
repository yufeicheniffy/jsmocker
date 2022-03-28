const data = {
    "HY1304":
        {
            ISSCSDATA: [{"order_no":"gzj220221cssj001","consignee_province":"","write_off_status":"0","contact_phone":"","goods_info":[],"spend_time":"0天0小时","consignee_name":"","buyer_name":"","contact_city":{"name":"武汉市","inputtext":"420100","tid":"203"},"consignee_area":"","evaluate_status":"0","buyer_id":"gzj220221cssj0003","consignee_phone":"","order_receive_status":"0","order_status":"0","refund_finish_time":"2022-02-21 17:25:22.0","refund_account":"5","contact_address":"","order_remark":"","consignee_address":"","contact_name":"","refund_status":"5","contact_province":{"name":"湖北省","inputtext":"420000","tid":"17"},"goods_deliver_status":"","seller_remark":"","order_account":"","consignee_city":"","refund_id":"4beb550204c14423ae849b7a508b60a0","contact_area":{"name":"江岸区","inputtext":"420102","tid":"1899"},"goods_receive_status":"","refund_apply_time":"2022-02-21 17:13","goods_type":"2","order_id":"gzj220221cssj01","seller_name":"123123","seller_id":"seller_id"}],
            SYS_EVT_TRACE_ID: "1010119151645673801530128",
            TXCODE: "HY1304",
            currentPage: "1",
            currentPageNum: "1",
            tatalPage: "1",
            totalNum: "1",
        },
    'HY9902':{
        orderDetails: {//订单信息每行1个的字段
            label: {
                resourceType: "资源类型",
                shopList: "商品清单",
                orderTips: "订单备注",
                orderAmount: "订单金额",
                orderStatus: "订单状态",
                sellerTips: "卖家备注"
            },
            value: {
                resourceType: "实物类",
                shopList: "1.大床房（含早）10间，2.小床房（含早）10间，3.商户房（含早）20间",
                orderTips: "订单备注",
                orderAmount: "10000",
                orderStatus: "待买家确认收货",
                sellerTips: "牙刷本批次为塑料制，本次赠送10支。"
            },
        },
        orderDetailsweakLabel: {//订单信息每行2个的字段
            label: {tno: "订单号", buyerAccount: "下单账号", buyTime: "下单时间", confirmDate: "接单时间", payTime: "付款时间"},
            value: {tno: "3242034802395802", buyerAccount: "wangyi", buyTime: "2021-10-21 12:34", confirmDate: "2021-10-21 12:34", payTime: "2021-10-21 12:34"},
        },
        shipmentDetailsweakLabel:{//物流信息
            label: {shipmentStyle: "配送方式", shipmentTime: "发货时间", enterprise: "物流公司", shipmentNo: "物流单号",delivery:"送货人",phone:"123212312312"},
            value: {shipmentStyle: "卖家配送", shipmentTime: "2021-10-22 14:34", enterprise: "顺丰速运", shipmentNo: "172394982913893",delivery: "王小二", phone: "123212312312"},
            exist: true,
        },
        sellerInfo: {name:"xxxxxx酒店",contact:"王小丫",phone:"138000138000",address:"贵州省镇远县景区11111"},
        refundDetails:{                    
            label: {
            refundId: "退款编号",
            refundStatus: "退款状态",
            serviceType: "服务类型",
            refundType: "退款类型",
            refundAmount: "退款金额",
            reason: "退款原因",
            applyTime: "申请时间",
            tips: "退款说明",
            pictures: "上传凭证",
        },
        value: 
        {  refundId: "12312312312",
        refundStatus: "退款中",
        serviceType: "仅退款",
        refundType: "全部退款",
        refundAmount: "100000",
        reason: "太丑了",
        applyTime: "2021-12-12 12:12:12",
        tips: "退款说明",
        pictures: [{
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            name: 'lemon1'
        },{
            url: 'http://img.hb.aicdn.com/723f8754f412debce188626d09cc0a1b2be6b7a6751a3-ICEp1E_fw658',
            name: 'lemon2'
        },
        {
            url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            name: 'lemon3'
        },
        {
            url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
            name: 'lemon4'
        },],
    }}
    },
}
  
module.exports.ISSCSDATA = data;


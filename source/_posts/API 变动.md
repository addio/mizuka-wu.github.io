# API 变动
## api/v2/activities/{activityId}/events
1. ticketCategories[].ticketAreas[].rows[]增加rowLimit的相关选项（纯文本/对象）
2. ticketCategories[]增加defaultRowLimit

## /v2/salerTickets/activity/{activityId}/ticketGroups
1. 老版本app areaInfo选项过滤掉带座位选项，只保留随机座位的选项，影响范围： 票档的最高最低价不准，无法计算选排选座中的最低最高价，显示继续添票功能可能会因为排数有变动导致会可以多挂
2. 增加rowLimit字段

## POST： /v1/salerTickets/ticketGroup
```javascript
{
        promiseDeliverDay: this.ticketGroup.promiseDeliverDay,
        ticketCategoryId: this.ticketGroup.ticketCategoryId,
        saling: this.ticketGroup.saling,
        originSaling: this.ticketGroup.originSaling,
        ticketGroupId: this.ticketGroup.ticketGroupId,
        addition: {
          isContinuousSeat: this.ticketGroup.addition.isContinuousSeat,
          sellLimit: this.ticketGroup.addition.sellLimit
        },
        salePrice: this.ticketGroup.salePrice,
        ticketAreaId: this.ticketGroup.ticketAreaId,
        ticketRowId: this.ticketGroup.ticketRowId
      }

```
增加一个RowLimit上传


## api/v2/activities/{activityId}
其中events字段同api/v2/activities/{activityId}/events


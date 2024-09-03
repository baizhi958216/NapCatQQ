import { ChatType, GetFileListParam, Peer, RawMessage, SendMessageElement, SendStatusType } from '@/core/entities';
import { InstanceContext, NapCatCore } from '@/core';
import { GeneralCallResult } from '@/core/services/common';

export class NTQQMsgApi {
    // nt_qq//global//nt_data//Emoji//emoji-resource//sysface_res/apng/ 下可以看到所有QQ表情预览
    // nt_qq\global\nt_data\Emoji\emoji-resource\face_config.json 里面有所有表情的id, 自带表情id是QSid, 标准emoji表情id是QCid
    // 其实以官方文档为准是最好的，https://bot.q.qq.com/wiki/develop/api-v2/openapi/emoji/model.html#EmojiType

    context: InstanceContext;
    core: NapCatCore;

    constructor(context: InstanceContext, core: NapCatCore) {
        this.context = context;
        this.core = core;
    }

    async getAioFirstViewLatestMsgs(peer: Peer, MsgCount: number) {
        return this.context.session.getMsgService().getAioFirstViewLatestMsgs(peer, MsgCount);
    }

    async getLatestDbMsgs(peer: Peer, MsgCount: number) {
        return this.context.session.getMsgService().getLatestDbMsgs(peer, MsgCount);
    }

    async FetchLongMsg(peer: Peer, msgId: string) {
        return this.context.session.getMsgService().fetchLongMsg(peer, msgId);
    }

    async sendShowInputStatusReq(peer: Peer, eventType: number) {
        return this.context.session.getMsgService().sendShowInputStatusReq(peer.chatType, eventType, peer.peerUid);
    }

    async getMsgEmojiLikesList(peer: Peer, msgSeq: string, emojiId: string, emojiType: string, count: number = 20) {
        //注意此处emojiType 可选值一般为1-2 2好像是unicode表情dec值 大部分情况 Taged M likiowa
        return this.context.session.getMsgService().getMsgEmojiLikesList(peer, msgSeq, emojiId, emojiType, '', false, count);
    }

    async setEmojiLike(peer: Peer, msgSeq: string, emojiId: string, set: boolean = true) {
        // nt_qq//global//nt_data//Emoji//emoji-resource//sysface_res/apng/ 下可以看到所有QQ表情预览
        // nt_qq\global\nt_data\Emoji\emoji-resource\face_config.json 里面有所有表情的id, 自带表情id是QSid, 标准emoji表情id是QCid
        // 其实以官方文档为准是最好的，https://bot.q.qq.com/wiki/develop/api-v2/openapi/emoji/model.html#EmojiType
        emojiId = emojiId.toString();
        return this.context.session.getMsgService().setMsgEmojiLikes(peer, msgSeq, emojiId, emojiId.length > 3 ? '2' : '1', set);
    }

    async getMultiMsg(peer: Peer, rootMsgId: string, parentMsgId: string): Promise<GeneralCallResult & {
        msgList: RawMessage[]
    } | undefined> {
        return this.context.session.getMsgService().getMultiMsg(peer, rootMsgId, parentMsgId);
    }

    async ForwardMsg(peer: Peer, msgIds: string[]) {
        return this.context.session.getMsgService().forwardMsg(msgIds, peer, [peer], new Map());
    }

    async getMsgsByMsgId(peer: Peer | undefined, msgIds: string[] | undefined) {
        if (!peer) throw new Error('peer is not allowed');
        if (!msgIds) throw new Error('msgIds is not allowed');
        //MliKiowa: 参数不合规会导致NC异常崩溃 原因是TX未对进入参数判断 对应Android标记@NotNull AndroidJADX分析可得
        return await this.context.session.getMsgService().getMsgsByMsgId(peer, msgIds);
    }

    async getSingleMsg(peer: Peer, seq: string) {
        return await this.context.session.getMsgService().getSingleMsg(peer, seq);
    }

    async fetchFavEmojiList(num: number) {
        return this.context.session.getMsgService().fetchFavEmojiList('', num, true, true);
    }

    async queryMsgsWithFilterExWithSeq(peer: Peer, msgSeq: string) {
        return await this.context.session.getMsgService().queryMsgsWithFilterEx('0', '0', msgSeq, {
            chatInfo: peer,
            filterMsgType: [],
            filterSendersUid: [],
            filterMsgToTime: '0',
            filterMsgFromTime: '0',
            isReverseOrder: false,
            isIncludeCurrent: true,
            pageLimit: 1,
        });
    }
    async queryMsgsWithFilterExWithSeqV2(peer: Peer, msgSeq: string, MsgTime: string, SendersUid: string[]) {
        return await this.context.session.getMsgService().queryMsgsWithFilterEx('0', '0', msgSeq, {
            chatInfo: peer,
            filterMsgType: [],
            filterSendersUid: SendersUid,
            filterMsgToTime: MsgTime,
            filterMsgFromTime: MsgTime,
            isReverseOrder: false,
            isIncludeCurrent: true,
            pageLimit: 1,
        });
    }
    async queryFirstMsgBySeq(peer: Peer, msgSeq: string) {
        return await this.context.session.getMsgService().queryMsgsWithFilterEx('0', '0', msgSeq, {
            chatInfo: peer,
            filterMsgType: [],
            filterSendersUid: [],
            filterMsgToTime: '0',
            filterMsgFromTime: '0',
            isReverseOrder: true,
            isIncludeCurrent: true,
            pageLimit: 1,
        });
    }
    async getMsgsBySeqAndCount(peer: Peer, seq: string, count: number, desc: boolean, z: boolean) {
        return await this.context.session.getMsgService().getMsgsBySeqAndCount(peer, seq, count, desc, z);
    }
    async getMsgBySeqList(peer: Peer, msgSeqList: string[]) {
        //坏的
        return await this.context.session.getMsgService().getMsgsBySeqList(peer, msgSeqList);
    }
    async getMsgBySeqExFirstMsg(peer: Peer, rootMsgId: string, replyMsgId: string) {
        let reply = await this.context.session.getMsgService().getSourceOfReplyMsgV2(peer, rootMsgId, replyMsgId);
        console.log(reply);
    }
    async getMsgExBySeq(peer: Peer, msgSeq: string) {
        const DateNow = Math.floor(Date.now() / 1000);
        const filterMsgFromTime = (DateNow - 300).toString();
        const filterMsgToTime = DateNow.toString();
        return await this.context.session.getMsgService().queryMsgsWithFilterEx('0', '0', msgSeq, {
            chatInfo: peer,//此处为Peer 为关键查询参数 没有啥也没有 by mlik iowa
            filterMsgType: [],
            filterSendersUid: [],
            filterMsgToTime: filterMsgToTime,
            filterMsgFromTime: filterMsgFromTime,
            isReverseOrder: false,
            isIncludeCurrent: true,
            pageLimit: 100,
        });
    }

    async setMsgRead(peer: Peer) {
        return this.context.session.getMsgService().setMsgRead(peer);
    }

    async getGroupFileList(GroupCode: string, params: GetFileListParam) {
        const [, groupFileListResult] = await this.core.eventWrapper.callNormalEventV2(
            'NodeIKernelRichMediaService/getGroupFileList',
            'NodeIKernelMsgListener/onGroupFileInfoUpdate',
            [
                GroupCode,
                params,
            ],
            () => true,
            () => true, // Todo: 应当通过 groupFileListResult 判断
            1,
            5000,
        );
        return groupFileListResult.item;
    }

    async getMsgHistory(peer: Peer, msgId: string, count: number, isReverseOrder: boolean = false) {
        // 消息时间从旧到新
        return this.context.session.getMsgService().getMsgsIncludeSelf(peer, msgId, count, isReverseOrder);
    }

    async recallMsg(peer: Peer, msgIds: string[]) {
        await this.context.session.getMsgService().recallMsg({
            chatType: peer.chatType,
            peerUid: peer.peerUid,
        }, msgIds);
    }

    async PrepareTempChat(toUserUid: string, GroupCode: string, nickname: string) {
        return this.context.session.getMsgService().prepareTempChat({
            chatType: ChatType.KCHATTYPETEMPC2CFROMGROUP,
            peerUid: toUserUid,
            peerNickname: nickname,
            fromGroupCode: GroupCode,
            sig: '',
            selfPhone: '',
            selfUid: this.core.selfInfo.uid,
            gameSession: {
                nickname: '',
                gameAppId: '',
                selfTinyId: '',
                peerRoleId: '',
                peerOpenId: '',
            },
        });
    }

    async getTempChatInfo(chatType: ChatType, peerUid: string) {
        return this.context.session.getMsgService().getTempChatInfo(chatType, peerUid);
    }

    async sendMsg(peer: Peer, msgElements: SendMessageElement[], waitComplete = true, timeout = 10000) {
        //唉？！我有个想法
        if (peer.chatType === ChatType.KCHATTYPETEMPC2CFROMGROUP && peer.guildId && peer.guildId !== '') {
            const member = await this.core.apis.GroupApi.getGroupMember(peer.guildId, peer.peerUid!);
            if (member) {
                await this.PrepareTempChat(peer.peerUid, peer.guildId, member.nick);
            }
        }
        const msgId = await this.generateMsgUniqueId(peer.chatType, await this.getServerTime());
        peer.guildId = msgId;
        const [, msgList] = await this.core.eventWrapper.callNormalEventV2(
            'NodeIKernelMsgService/sendMsg',
            'NodeIKernelMsgListener/onMsgInfoListUpdate',
            [
                '0',
                peer,
                msgElements,
                new Map(),
            ],
            (ret) => ret.result === 0,
            msgRecords => {
                for (const msgRecord of msgRecords) {
                    if (msgRecord.guildId === msgId && msgRecord.sendStatus === SendStatusType.KSEND_STATUS_SUCCESS) {
                        return true;
                    }
                }
                return false;
            },
            1,
            timeout,
        );
        return msgList.find(msgRecord => msgRecord.guildId === msgId);
    }

    async generateMsgUniqueId(chatType: number, time: string) {
        return this.context.session.getMsgService().generateMsgUniqueId(chatType, time);
    }

    async getServerTime() {
        return this.context.session.getMSFService().getServerTime();
    }

    async forwardMsg(srcPeer: Peer, destPeer: Peer, msgIds: string[]) {
        return this.context.session.getMsgService().forwardMsg(msgIds, srcPeer, [destPeer], new Map());
    }

    async multiForwardMsg(srcPeer: Peer, destPeer: Peer, msgIds: string[]): Promise<RawMessage> {
        const msgInfos = msgIds.map(id => {
            return { msgId: id, senderShowName: this.core.selfInfo.nick };
        });
        const [, msgList] = await this.core.eventWrapper.callNormalEventV2(
            'NodeIKernelMsgService/multiForwardMsgWithComment',
            'NodeIKernelMsgListener/onMsgInfoListUpdate',
            [
                msgInfos,
                srcPeer,
                destPeer,
                [],
                new Map(),
            ],
            () => true,
            (msgRecords) => msgRecords.some(
                msgRecord => msgRecord.peerUid === destPeer.peerUid
                    && msgRecord.senderUid === this.core.selfInfo.uid
            ),
        );
        for (const msg of msgList) {
            const arkElement = msg.elements.find(ele => ele.arkElement);
            if (!arkElement) {
                continue;
            }
            const forwardData: any = JSON.parse(arkElement.arkElement?.bytesData ?? '');
            if (forwardData.app != 'com.tencent.multimsg') {
                continue;
            }
            if (msg.peerUid == destPeer.peerUid && msg.senderUid == this.core.selfInfo.uid) {
                return msg;
            }
        }
        throw new Error('转发消息超时');
    }

    async markAllMsgAsRead() {
        return this.context.session.getMsgService().setAllC2CAndGroupMsgRead();
    }
}

/*==============================
【操作方法】

1. スクリプト実行終了後、ログの最下部から印刷用ドキュメントのURLを探してください
2. URLを開き、内容を確認した後、ご自身でドキュメントを印刷してください
3. 印刷後、そのドキュメントを「印刷済み」フォルダに移動してください

 【対応サイト】
自社（肉弁当、葵弁当）
ワオ（お弁当デリ、はこぶケータリング)
くるめし
シェフコレ

【未対応サイト】
結膳、CS、ごちクル（PDF添付メールのため、現時点は別途対応が必要）
==============================*/

function runPrintMailsByButton() {
  try {
    Logger.log("-----メール印刷処理を開始します-----");
    
    // CommonLib から設定を取得
    var CONFIG = [
      CommonLib.CONFIG_NARIKURA_KURUMESHI,
    ];

    CommonLib.printMailsFromSheet(CONFIG);
    
    Logger.log("-----メール印刷処理が完了しました-----");
  } catch (e) {
    Logger.log("⚠️メール印刷処理でエラーが発生しました: " + e.message);
    Logger.log("エラー詳細: " + e.stack);
    throw e;
  }
}
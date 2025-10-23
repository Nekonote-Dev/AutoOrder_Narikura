// 現時点はワオ、くるめし、シェフコレだけ対応

function runPrintMails() {
  try {
    Logger.log("-----メール印刷処理を開始します-----");
    
    var CONFIG = [
      CONFIG_AOI_WAO,
      CONFIG_AOI_KURUMESHI,
      CONFIG_AOI_CHEF_COLLE,
    ];
    
    CommonLib.printMails(CONFIG);
    
    Logger.log("-----メール印刷処理が完了しました-----");
  } catch (e) {
    Logger.log("⚠️メール印刷処理でエラーが発生しました: " + e.message);
    Logger.log("エラー詳細: " + e.stack);
    throw e;
  }
}
